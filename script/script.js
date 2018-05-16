document.addEventListener('DOMContentLoaded', function(){
    
    Vue.component('flat-pickr', VueFlatpickr);

    Vue.component('modal-window', {
        data: function(){
            return {
                
            }
        },
        props: ['fields'],
        template: '#modal-window'
    });
    
    var vm = new Vue({
        el: '#app',
        data: {
            emailRegEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            textFieldRegEx : /['"]+/g,
            validationPass: false,
            errorsType: {
                invalidEmail: 'Invalid Email',
                emptyField: 'This is required',
                invalidText: 'Invalid Text'
            },
            config: {
                altFormat: "F j, Y",
                maxDate: 'today'
            },
            error: null,
            fields: {
               name: {
                    value: '',
                    isValid: true,
                    validationError: null
                }, 
                lastname:{
                    value: '',
                    isValid: true,
                    validationError: null
                }, 
                date:{
                    value: '',
                    isValid: true,
                    validationError: null
                }, 
                sex:{
                    value: '',
                    isvalid: true,
                    validationError: null
                }, 
                country:{
                    value: '',
                    isValid: true,
                    validationError: null
                }, 
                email:{
                    value: '',
                    isValid: true,
                    validationError: null
                }, 
                password:{
                    value: '',
                    isValid: true,
                    validationError: null
                }, 
                address:{
                    value: '',
                    isValid: true,
                    validationError: null
                }, 
                message:{
                    value: '',
                    isValid: true,
                    validationError: null
                }
            }
        },
        methods: {
            validationForm: function(){
                this.validationPass = true;
                for(key in this.fields){
                    this.fields[key].isValid = true;
                    this.fields[key].validationError = '';
                    
                    this.isEmptyValidation(key);
                    this.emailFieldValidation(key);
                    this.isValidValidation(key);
                    
                    if(this.fields[key].isValid === false){
                        this.validationPass = false;
                    }
                }
            },
            isEmptyValidation: function(el){
                if(this.fields[el].value === '' && el !== 'message'){
                    this.fields[el].isValid = false;
                    this.fields[el].validationError = this.errorsType.emptyField;
                }
            },
            isValidValidation: function(el){
                if(this.textFieldRegEx.test(String(this.fields[el].value).toLowerCase()) === true && key !== 'email'){
                    this.fields[el].isValid = false;
                    this.fields[el].validationError = this.errorsType.invalidText;
                    
                }
            },
            emailFieldValidation: function(el){
                if(el === 'email'){
                    this.fields[el].isValid = this.emailRegEx.test(String(this.fields[el].value).toLowerCase());
                    this.fields[el].isValid ? 
                    this.fields[el].validationError = '' :
                    this.fields[el].validationError = this.errorsType.invalidEmail;
                }
            }
        }
    });
});