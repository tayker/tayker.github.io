var makeTodo = {
    todoList: [],
    addTodo: function(todo) {
        this.todoList.push(todo);
        console.log(this.todoList);
        this.renderOneTodo(todo);
    },
    renderOneTodo: function(todo) {
        var out = document.getElementById('out');
        
        out.insertAdjacentElement('afterbegin', todo);
    },
    createTodo: function(taskValue){
        var that = this;
        var todoListElem = document.createElement('li');
        var span = document.createElement('span');
        span.innerText = taskValue;
        todoListElem.insertAdjacentElement('afterbegin', span);
        var btn = document.createElement('button');
        btn.classList.add('delete');
        btn.addEventListener('click', function(){
            console.log(that.todoList.indexOf(todoListElem))
            var out = document.getElementById('out');
            out.removeChild(todoListElem);
            that.todoList.splice(that.todoList.indexOf(todoListElem), 1);
        });
        todoListElem.insertAdjacentElement('beforeend', btn);
        var box = document.createElement('input');
        box.type = 'checkbox';
        box.name = 'checkbox';
        todoListElem.insertAdjacentElement('afterbegin', box);
        box.addEventListener('click', function(){
            console.log(that.todoList.indexOf(todoListElem));
            todoListElem.classList.toggle('checked');
        })
        
        return todoListElem;
    },
    renderChecked : function(){
        var checkedEl = document.getElementsByTagName('li');
        var btn = document.getElementById('showChecked');
        
        btn.addEventListener('click', function(){
            
            for( var i = 0; i < checkedEl.length; i++){
                if(checkedEl[i].classList.contains('checked')){
                checkedEl[i].classList.remove('hidden')
            }
                else{
                    checkedEl[i].classList.add('hidden')
                }
            }
            
        })
    },
    renderProcess : function(){
        var checkedEl = document.getElementsByTagName('li');
        var btn = document.getElementById('showProcess');
        
        btn.addEventListener('click', function(){
            for( var i = 0; i < checkedEl.length; i++){
//                checkedEl[i].classList.add('hidden');
                if(checkedEl[i].classList.contains('checked')){
                checkedEl[i].classList.add('hidden')
            }
                else{
                    checkedEl[i].classList.remove('hidden')
                }
            }
            
        })
    },
    renderAll : function() {
        var btn = document.getElementById('renderAll');
        
        btn.addEventListener('click', function(){
            var showAll = document.getElementsByClassName('hidden');
            while(!!showAll.length){
                
                showAll[showAll.length - 1].classList.remove('hidden');
            }
        })
        
    },
    init: function(){
        this.renderChecked();
        this.renderAll();
        this.renderProcess();
        var form = document.getElementsByTagName('form')[0];
        var that = this;
        
        console.log(form);
        form.addEventListener('submit', function(evt){
            evt.preventDefault();
            console.log(form.elements.task.value);
            todo = that.createTodo(form.elements.task.value);
            
            that.addTodo(todo);
            document.myForm.reset();
        })
    }
}

makeTodo.init();