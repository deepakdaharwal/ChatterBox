import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        throw new Error("Cannot connect to MongoDB");
    }
}
async function disconnectDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect from MongoDB");
    }
}
export { connectToDatabase, disconnectDatabase };
//# sourceMappingURL=connection.js.map