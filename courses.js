var courses =[
    {
        path : 'php1.png',
        title : 'php courses',
        price : 9.9,
        category : 'PHP'
    },
    {
        path: 'htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        path: 'htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        path: 'cssSelect.jpg',
        title: 'CSS select',
        category: 'CSS',
        price: 69.9
    },
    {
        path: 'javascriptVariab.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        path: 'javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        path: 'htmlAtt.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        path: 'cssProperietes.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
       path: 'javascriptobjt.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        path: 'cssmesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        path: 'cssAnim.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        path: 'javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        path: 'js3.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        path: 'cssCouleurs.png',
        title: 'css colors',
        category: 'CSS',
        price: 29.9
    },
    {
        path : 'js1.png',
        title : 'js courses',
        price : 19.9,
        category : 'JS'
    },
    {
        path : 'js2.jpg',
        title : 'js courses',
        price : 19.9,
        category : 'JS'
    },
    {
        path : 'css1.png',
        title : 'css courses',
        price : 19.9,
        category : 'CSS'
    },
    {
        path : 'html1.png',
        title : 'HTML courses',
        price : 19.9,
        category : 'HTML'
    },
    {
        path: 'phpBasics.png',
        title: 'getting started with php',
        category: 'PHP',
        price: 15.9
    },
]
     

              var element =document.getElementById('contenue');
            
              function creationcourses(path , titre ,prix){

                 var div =document.createElement('div'),
                 img=document.createElement('img'),
                 p=document.createElement('p'),
                 span=document.createElement('span');

                 img.src=path;
                 p.appendChild(document.createTextNode(titre));
                 span.appendChild(document.createTextNode(prix));

                 div.appendChild(img);
                 div.appendChild(p);
                 div.appendChild(span);

                 div.setAttribute('class', 'card cool-4');
                 img.setAttribute('class', 'image');
                 p.setAttribute('class', 'card_text');
                 span.setAttribute('class', 'card_text');
             

                element.appendChild(div);

              }
              courses.forEach(ele => {
                creationcourses(ele.path ,ele.title ,ele.price);
                
              });
              let range = document.getElementById('range1');
              let valeur = document.getElementById('priceValeur');
              function ranger () {
                valeur.textContent = (range.value);
            }
            const searchbar = document.getElementById('serch');
            var cardes = document.querySelectorAll(".cool-4");
            searchbar.addEventListener("keyup", (el) => {
                const lettrecherche = el.target.value;
                cardes.forEach((card) => {
                    if (card.textContent.indexOf(lettrecherche) >= 0) {
                        card.style.display = "block";//
                    }
                    else {
                        card.style.display = "none";
            
                    }
                })
            
            });

            function chercherHtml() {
                var i;
                for (i=0;i<courses.length;i++){
                   
                if(courses[i].category=="HTML"){
                    
                    cardes[i].style.display="block";
                }
                else{
                    cardes[i].style.display="none";      
                  }
            }
            
        }
        function chercherCss(){
            var i;
            for (i=0;i<courses.length;i++){
               
            if(courses[i].category=="CSS"){
                
                cardes[i].style.display="block";
            }
            else{
                cardes[i].style.display="none";      
              }
        }
        }
        function chercherPhp(){
            var i;
            for (i=0;i<courses.length;i++){
               
            if(courses[i].category=="PHP"){
                
                cardes[i].style.display="block";
            }
            else{
                cardes[i].style.display="none";      
              }
        }
        }

        function chercherJs(){
            var i;
            for (i=0;i<courses.length;i++){
               
            if(courses[i].category=="JS"){
                
                cardes[i].style.display="block";
            }
            else{
                cardes[i].style.display="none";      
              }
        }
        }
        function chercherAll(){
            var i;
            for(i=0;i<courses.length;i++){
                cardes[i].style.display="block";
            }
        }
        function filtrageprix(){
            var i;
            for(i=0;i<courses.length;i++){
                if(courses[i].price<=range.value){
                    cardes[i].style.display="block";
                }
                else{
                    cardes[i].style.display="none";      
                  }
            }
        }
            
            
            
            
            
            
            

        