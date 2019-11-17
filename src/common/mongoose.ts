import mongoose from "mongoose";

export const toObjectId = (id: string) => mongoose.Types.ObjectId(id);
