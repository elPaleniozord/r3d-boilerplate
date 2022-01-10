import { Color3, Vector3 } from '@babylonjs/core';
import Box from './components/Box/Box';
import Navbar from './components/Navbar/Navbar';
import BabylonScene from './components/BabylonRenderer/BabylonRenderer';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {increaseRPM, decreaseRPM, changeRotationAxis, selectBox} from './redux/slices/sceneControls/boxSlice'

function App() {
  const {rpm, rotationAxis} = useAppSelector(selectBox)
  const dispatch = useAppDispatch()
  
  return (
    <AppContainer>
      <Navbar />
      <h1>React 3D App Template</h1>
      <p>React-Babylon boilerplate integrated with Redux and Typescript for fast prototyping. Bootstraped with CRA, responsive and PWA-ready</p>
      
      <BabylonScene>
        <freeCamera name='primary-camera' position={new Vector3(0,5,-10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />

        <Box color={Color3.Green()} position={new Vector3(2,0,0)} rotationAxis='x' rpm={5} />
        <Box color={Color3.Red()} position={new Vector3(-2,0,0)} rotationAxis={rotationAxis} rpm={rpm} />
      </BabylonScene>
      <button onClick={() => dispatch(increaseRPM())}>Increase speed</button>
      <button onClick={() => dispatch(decreaseRPM())}>Decrease speed</button>
      <button onClick={() => dispatch(changeRotationAxis())}>Change rotation</button>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default App;
