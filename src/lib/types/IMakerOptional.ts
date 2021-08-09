import IMaker from "./IMaker";

export default interface IMakerOptional extends Partial<IMaker> {
    name: IMaker["name"],
    component: IMaker["component"]
}