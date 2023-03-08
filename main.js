//Abrindo popups
        //Privacidade
        function openPrivac() {
            fundoEscuroPriv();
            document.getElementById("privacidade").style.display = "block";
        }
        //Close privacidade
        function closePrivac() {
            fundoClaroPriv();
            document.getElementById("privacidade").style.display = "none";
        }
        //Abrindo Termos
        function openTermos() {
            fundoEscuroTerm();
            document.getElementById("termos").style.display = "block";
        }
        //Close Termos
        function closeTermos() {
            fundoClaroTerm();
            document.getElementById("termos").style.display = "none";
        }
    //-------------------------------------------

    // Deixando o fundo escuro ao abrir os popups.
        var valuePriv = document.getElementById('privacidade');
        function fundoEscuroPriv () {
            valuePriv.classList.add('dim');
        };

        function fundoClaroPriv (){
          valuePriv.classList.remove('dim');
        };

        var valueTerm = document.getElementById('termos');
        function fundoEscuroTerm () {
          valueTerm.classList.add('dim');
        };

        function fundoClaroTerm (){
          valueTerm.classList.remove('dim');
        };

    //--------------------------------------

    //Botão Sincronizado
        
    //-------------------------------------

    const DELAY_TIME_IN_SECONDS = 621;
    const DELAY_ELEMENTS_CLASS = 'delay';

     let player;
    
    function showElements(className, value) {
        for (const element of document.getElementsByClassName(className)) {
            element.style.display = value;
        }
    }
    
    function showElementsAfterDelay() {
      const time = Math.floor(player.video.currentTime);
      if (time >= DELAY_TIME_IN_SECONDS && player.paused == false) {
        showElements(DELAY_ELEMENTS_CLASS, 'block');
      }
    }
    
    window.onload = () => {
        showElements(DELAY_ELEMENTS_CLASS, 'none');
        const addFunctionShowElementsAfterDelay = setInterval(() => {
          if (window.smartplayer.instances[0].mounted) {
            player = window.smartplayer.instances[0];
            player.events.events.timeupdate.push(showElementsAfterDelay);
            clearInterval(addFunctionShowElementsAfterDelay);

            
          }
        }, 100)
    }

    //=======================================================================

      ( function(){
    let youtubePlayer = document.querySelectorAll(".youtube-video-player");

    for (let i = 0; i < youtubePlayer.length; i++) {
        let container = youtubePlayer[i];
        let thumbnailSource = "https://img.youtube.com/vi/"+ container.dataset.videoId +"/" + container.dataset.videoThumbnail + "default.jpg"; 

        let thumbnail = new Image();
        thumbnail.src = thumbnailSource;
        thumbnail.addEventListener("load", function() {
            container.appendChild(thumbnail);
        });

        container.addEventListener("click", function() {
            let iframe = document.createElement( "iframe" );

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            iframe.setAttribute("src", "https://www.youtube.com/embed/"+ this.dataset.videoId +"?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild( iframe );
        });
        }
    })();