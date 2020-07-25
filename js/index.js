// Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "./images/wind energy.jpg",
           "./images/solar energy.jpg",
           "./images/geothermal energy.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const btns = document.querySelectorAll('.buttons button');
    const da= document.querySelector('.new-content');
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 

    Start your handleSelection function here. */ 
    function addContent(ev){
        let clicked = ev.target.value;
        for(let btn of btns)
        {
            if (btn.hasAttribute('id'))
            {
                btn.removeAttribute('id');
            }
        }
        ev.target.setAttribute("id","active");
        if(clicked === 'b1'){
            da.innerHTML=`<figure><h2>Wind Energy</h2> <img src="./images/wind energy.jpg"> 
                <p>We’ve come a long way from old-fashioned wind mills. Today, turbines as tall as skyscrapers—with turbines nearly as wide in diameter—stand at attention around the world. Wind energy turns a turbine’s blades, which feeds an electric generator and produces electricity.</p>
             </figure>`;
        }
        if(clicked === 'b2'){
            da.innerHTML=`<figure><h2>Solar Energy</h2> <img src="./images/solar energy.jpg"> 
                <p>Humans have been harnessing solar energy for thousands of years—to grow crops, stay warm, and dry foods. According to the National Renewable Energy Laboratory, “more energy from the sun falls on the earth in one hour than is used by everyone in the world in one year.” Today, we use the sun’s rays in many ways—to heat homes and businesses, to warm water, or power devices.</p>       
             </figure>`;
        }
        if(clicked === 'b3'){
            da.innerHTML=`<figure><h2>Geothermal Energy</h2> <img src="./images/geothermal energy.jpg"> 
                <p>If you’ve ever relaxed in a hot spring, you’ve used geothermal energy. The earth’s core is about as hot as the sun’s surface, due to the slow decay of radioactive particles in rocks at the center of the planet. Drilling deep wells brings very hot underground water to the surface as a hydrothermal resource, which is then pumped through a turbine to create electricity. </p>      
             </figure>`;
        }

    }
    for(let btn of btns){
        btn.addEventListener('click',addContent);
    }
            
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  