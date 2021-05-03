const { default: Logo } = require("../Logo/Logo")
const { default: Nav } = require("../Nav/Nav")

const Toolbar=()=>{
    return(
        <div>
<Logo/>
<nav>
    <Nav/>
</nav>
        </div>
    )
}
export default Toolbar