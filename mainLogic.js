// changing UI depending on sing in or not
        function setupUI(){
            
            const token = localStorage.getItem("token");

            const notLoggedInDIV= document.getElementById("not-logged-in-div");
            const loggedInDIV = document.getElementById("logged-in-div");

            
            // add post button
            const addPostBtn = document.getElementById("add-btn");

            if(token == null){
                notLoggedInDIV.style.setProperty("display", "flex", "important");
                loggedInDIV.style.setProperty("display", "none", "important");
                if (addPostBtn != null){
                    
                    addPostBtn.style.setProperty("display", "none", "important");
                }
                
            }else{
                notLoggedInDIV.style.setProperty("display", "none", "important");
                loggedInDIV.style.setProperty("display", "flex", "important");
                if (addPostBtn != null){
                    
                    addPostBtn.style.setProperty("display", "none", "important");
                }
                
                // const user = getCurrentUser();
                // document.getElementById("nav-username").innerHTML = user.username;
                // document.getElementById("nav-user-image").src = user.profile_image;
            }

        }

        setupUI();