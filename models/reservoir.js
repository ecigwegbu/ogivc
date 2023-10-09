import { Schema, model, models } from 'mongoose';

const ResModelSchema = new Schema({
    user: {
        type: String,
        required: [true, 'Error: User is missing!'],
    },
    field: {
        type: String,
        required: [true, 'Error: Field is missing!'],
    },
    layer: {
        type: String,
        required: [true, 'Error: Layer is missing!'],
    },
    block: {
        type: String,
        required: [true, 'Error: Block is missing!'],
    },
    resCode: {
        type: String,
        required: [true, 'Error: Reservoir Code is missing!'],
    },
    reservoirType: { type: String, },
    mFactor: { type: Number, },
    boi: { type: Number, },
    rsi: { type: Number, },
    rhoo: { type: Number, },
    ei: { type: Number, },
    cgr: { type: Number, },
    rhog: { type: Number, },
    poro: { type: Number, },
    ntgo: { type: Number, },
    porg: { type: Number, },
    ntgg: { type: Number, },
    sato: { type: Number, },
    swco: { type: Number, },
    satg: { type: Number, },
    swcg: { type: Number, },
    grvOil: { type: Number, },
    grvCapGas: { type: Number, },
    stoiip: { type: Number, },
    sgiip: { type: Number, },
    fgiip: { type: Number, },
    ciip: { type: Number, },
    rfo: { type: Number, },
    rfsg: { type: Number, },
    rffg: { type: Number, },
    rfcond: { type: Number, },
    uro: { type: Number, },
    ursg: { type: Number, },
    urfg: { type: Number, },
    urcond: { type: Number, },
});

const ResModel = models.ResModel || model("ResModel", ResModelSchema);

export default ResModel;