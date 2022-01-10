import { Engine, Scene } from "react-babylonjs"
import { Provider } from "react-redux"
import { store } from '../../redux/store'

const BabylonScene:React.FC = ({children}) => {
  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        {/* context is not passed down to canvas need to bridge it explicitly */}
        <Provider store={store}>
        {children}
        </Provider>
      </Scene>
    </Engine> 

  )
}

export default BabylonScene