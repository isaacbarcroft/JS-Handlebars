      


    //     // const API_KEY ='c3e891b7e7b32db73c2d';
    //     const BASE_URL = 'https://api.github.com/users/isaacbarcroft';
    //     // const USER = 'isaacbarcroft'
    
    //     const generateHTML = (data) => {
    //             console.log(document.querySelector('.dog'))
    //             const source = document.querySelector('#avatar').innerHTML
    //             const template = Handlebars.compile(source);
    //             const context = data; 
    //             const html = template(context); 
    //             document.querySelector('.dog').innerHTML = html;
    //         }
            
    //         fetch(`${BASE_URL}`)
    //         .then(response => response.json())
    //         .then(data => generateHTML(data))
            
    //     })();

    //     generateHTML

        // const API_KEY ='c3e891b7e7b32db73c2d'

 (function (){

    // const generateHTML = (data, read, html) => {
    //     const rawTemplate = document.querySelector(read).innerHTML;
    //     const compiledTemplateFunc= Handlebars.compile(rawTemplate);
    //     const ourGeneratedHTML = compiledTemplateFunc(data);
    //     document.querySelector(html).innerHTML = ourGeneratedHTML;
    // }
        const BASE_URL = 'https://api.github.com/users/isaacbarcroft';
        // const USER = 'isaacbarcroft'

        const generateHTML = (data) => {
                const source = document.querySelector('#avatar').innerHTML
                const template = Handlebars.compile(source);
                const context = data; 
                const html = template(context); 
                document.querySelector('.git-bio').innerHTML = html;
                document.querySelector('.portrait').src = data.avatar_url
                document.querySelector('.name').innerHTML= {...data}.login    
            }

            const generateHTML2 = (data) => {
                const source = document.querySelector('#repos-script').innerHTML
                const template = Handlebars.compile(source);
                const context = data; 
                const html = template(context); 
                document.querySelector('#repos').innerHTML = html
                document.querySelector('.repo-list').innerHTML = {...data}[0].html_url
                console.log({...data})
            }

        
        fetch(`${BASE_URL}`)
            .then (response => response.json())
            .then(data => generateHTML(data)),
           

        fetch(`https://api.github.com/users/isaacbarcroft/repos`)
            .then (response => response.json())
            .then(data => generateHTML2(data))
        
        
        })()
