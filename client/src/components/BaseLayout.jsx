import MainMenu from './MainMenu'
import Footer from './Footer'

const BaseLayout = (props) => {


    return (
        <div>
            <MainMenu />
            {props.children}
            <Footer />
        </div>
    )
}

export default BaseLayout