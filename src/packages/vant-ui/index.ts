import { ComponentMaker } from './../../types/core.d';
import ButtonComponentMaker from "./button/index"
import LayoutComponentMaker from "./layout"


const vantUiMakerList: ComponentMaker[] = [];

vantUiMakerList.push(ButtonComponentMaker, LayoutComponentMaker)

export default vantUiMakerList