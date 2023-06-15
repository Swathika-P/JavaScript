/* 4 Object methods are used in this program 
  1.getElementById()
    - buildin method
    - used for linking id
 */
    let todo = document.getElementById("myform") //todo is a id here
    let input = document.getElementById("myInput")
    let list = document.getElementById("mylist") //
    
    /*syntax:
      2.id.function(a,b)
       a - opertaion
       b - required result for that operation
       -(used when a change is required)
    */
     
    //todo.addEventListener("click",()=>console.log("Welcome"))
    //if u click the box "Welcome" result in console and go to page"ERROR 404"
    
    //todo.addEventListener("submit",()=>console.log(myInput.value)) 
    //id u click "create item" after entering text,the text will be the result and go to page"ERROR 404"
    
    /*To prevent "ERROR 404" - the typed text will appear
    3.preventDefault() 
       -used when we dont want what already is..instead to create our own
     */
    todo.addEventListener("submit",(data)=>{data.preventDefault()
                                            console.log(myInput.value)})
    //myInput.value - to used the value of myInput
    
    //directly create item
    todo.addEventListener("submit",(data)=>{data.preventDefault()
                                            createItem(myInput.value)})
    
    /*syntax:
      id.insertAdjacentHTML(a,b)
      a - WHERE to add
      b - WHAT to add
    */
    
     /*
    createItem = (d) =>{
      mylist.insertAdjacentHTML("beforeend",d) //beforeend - (before last) //beforestart is another thing.
    }*/   
    //this printing in same line,no format..so add a template format(how we need in output)
    
    /*4.insertAdjacentHTML()
        syntax:
         -element.insertAdjacentHTML(position, html)
         -inserts HTML code into a specified position.
         
         -----------------------------------------------------------------
        | afterbegin	| After the beginning of the element (first child) |
        | afterend	  | After the element                                |
        | beforebegin | Before the element                               |
        | beforeend	  | Before the end of the element (last child)       |
        ------------------------------------------------------------------
     */ /*
     createItem = (d) =>{
       //let mytemplate = <li>study js <button>Delete</button></li>
       let mytemplate = `<li>${d} <button>Delete</button></li>` //use (``) symbol
       mylist.insertAdjacentHTML("beforeend",mytemplate) //pass "mytemplate" so that it prints in the specified format
    } */
    
    //as of now we created a app to add things..now we have to delete after completing
    createItem = (d) =>{
       let mytemplate = `<li>${d}<button onclick="deleteitem(this)">Delete</button></li>` 
       //deleteitem() - calls the func
       mylist.insertAdjacentHTML("beforeend",mytemplate) 
       input.value = ""
       input.focus() //after typing the data is completed,it should clear and next can be typed.
    } 
    
    function deleteitem(x){
      x.parentElement.remove()
    }
    //delete button can be used to delete things
    
    