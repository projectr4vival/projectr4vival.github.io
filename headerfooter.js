window.onload = function ()
    {
        var header = document.getElementById("header");
        var footer = document.getElementById("footer");

        header.innerHTML = 

        `<table width = 100%>
        <tr>
          <td id = "logo">
            <a href = "https://projectr4vival.github.io/">
              <img src = "https://projectr4vival.github.io/logo.svg">
            </a>
          </td>
          <td align = right>
            <ul id = "sub_header"> 
              <li><a href = "https://projectr4vival.github.io/">Home</a></li> 
              <li><a href = "https://projectr4vival.github.io/kernel">Kernel</a></li> 
              <li><a href = "https://projectr4vival.github.io/dumping">Dumping</a></li>
              <li><a href = "https://projectr4vival.github.io/homebrew">Homebrew</a></li> 
              <li><a href = "https://projectr4vival.github.io/credits">Credits</a></li> 
              <li><a href = "https://projectr4vival.github.io/discord" target = "_blank"><img src = "https://projectr4vival.github.io/discord.svg"></a></li> 
              <li> 
                <div class="dropdown">
                  <img src = "https://projectr4vival.github.io/language.svg" onclick="showDropdown()" class="dropbtn">
                    <div id="myDropdown" class="dropdown-content">
                      <a href="https://projectr4vival.github.io/">English</a>
                      <hr>
                      <a href="#">Italiano</a>
                    </div>
                </div> 
              </li> 
            </ul> 
          </td>
        </tr>
      </table>`;


        footer.innerHTML = 
        
        `<table width = "100%">
          <tr>
            <td>This site is not affiliated with the Nintendo&reg company in any way.</td>
            <td align = "right">&copy 2021 Project R4vival - <a href = "https://github.com/projectr4vival/projectr4vival.github.io" target="_blank">Source<img src = "https://projectr4vival.github.io/github.svg"></a></td>
          </tr>
        </table>`;

    }