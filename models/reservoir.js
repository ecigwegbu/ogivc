import { Schema, model, models } from 'mongoose';

const ReservoirTableSchema = new Schema({
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
    }
});

const ReservoirTable = models.ReservoirTable || model("ReservoirTable", ReservoirTableSchema);

export default ReservoirTable;