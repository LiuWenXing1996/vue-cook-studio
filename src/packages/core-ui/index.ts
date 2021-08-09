import { ComponentMaker } from '../../components/ComponentMaker/types';
import { Editor } from '../../components/Editor/types';
import RootAppMaker from "./root-app/index"
import InputEditor from './input-editor';
import NumberEditor from "./number-editor";
import JsEditor from './js-editor';


export const makerList: ComponentMaker[] = [];
export const editorList: Editor[] = [];

makerList.push(RootAppMaker)
editorList.push(InputEditor)
editorList.push(NumberEditor)
editorList.push(JsEditor)

