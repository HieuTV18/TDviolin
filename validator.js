
function Validator(options){

    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // hàm thực hiện validate
    function validate(inputElement,rule){
                    //value: inputElement.value
                    //test function: rule.test
                    var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
                    var errorMessage;
                  

                    // lấy ra các rule của selector
                    var rules = selectorRules[rule.selector];
                    // console.log(rules);
                    // lặp qua các rule và kiểm tra, nếu có lỗi thì dừng lặp
                    for (var i = 0; i< rules.length; ++i){
                        errorMessage = rules[i](inputElement.value);
                        if(errorMessage) break;
                    }

                    if (errorMessage){
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add('invalid');
                    }
                    else{
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');

                    }
                     return !errorMessage;

                    // console.log(inputElement)
                    // console.log(inputElement.parentElement) lấy ra thẻ cha từ thẻ input => form-group cha
                    // console.log(inputElement.parentElement.querySelector('.form-message')) =>lấy ra thẻ con từ thẻ cha
    }


    // lấy element của form càn validate
    var formElement = document.querySelector(options.form);
    if (formElement){

        // lắng nghe sự kiện submit và bỏ qua hành vi mặc định
        formElement.onsubmit = function(e){
            e.preventDefault();

            var isFormValid = true; //form không có lỗi
            // lặp qua rule và validate ngay
            options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            var isValid = validate(inputElement,rule);
            if (!isValid){
                isFormValid = false;
            }

            });

            

            if (isFormValid){
                //Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        values[input.name] = input.value;
                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
                //trường hợp submit với hành vi mặc định
                else{
                    formElement.submit();
                }
            }
            
        }

        // lặp qua mỗi rule và xử lý
        options.rules.forEach(function(rule){

            // lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);

            }
            else{
                selectorRules[rule.selector] = [rule.test];

            }


            var inputElement = formElement.querySelector(rule.selector);
            // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);

            if (inputElement){
                //xử lí blur ra khỏi input
                inputElement.onblur = function(){
                    
                   validate(inputElement,rule);
                }
                
                // xử lý mỗi khi nguwofi dùng nhập input
                inputElement.oninput = function(){
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }

            }
        });
    }

}

// định nghĩa rule và nguyên tắc
//1: khi có lỗi => trả ra message lỗi
//2: khi hợp lệ => k trả ra gì cả (undefined)
Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này!'
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Trường này phải là email'
        }
    }

}

Validator.minLength = function(selector, min, message){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : message|| `Trường này phải có ít nhất ${min} kí tự`;
        }
    }

}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không đúng'
        }
    }
}