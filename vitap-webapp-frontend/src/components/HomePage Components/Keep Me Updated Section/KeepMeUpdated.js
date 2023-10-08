
export default function keepmeupdated(){
    return(
        <>
            <div class="updated">
        <h1 class="updateheader">Keep Me Updated</h1>
        <p class="updatetext">Fill out this box to be the <span class="person">First Person</span> to hear about our updates</p>

        <form>
          <div class="flex felx-row">
          <div class="basis-1/4">
          <input class="input" placeholder="*NAME" for="grid-first-name"/>
          </div>
          <div class="basis-1/4">
          <input class="input" placeholder="*EMAIL ADDRESS" for="grid-first-name"/>
          </div>
          <div class="basis-1/4">
          <input class="input" placeholder="*PHONE NUMBER" for="grid-first-name"/>
          </div>
          <div class="basis-1/4">
          <button class="inputbutton"><span class="inputbuttontext">SUBSCRIBE</span></button>
          </div>
          </div>
          </form>
          </div>
        </>
    )
}
