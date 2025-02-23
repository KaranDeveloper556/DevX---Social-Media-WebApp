import { ID } from "appwrite";
import { account, appwriteConfig, avatars, databases } from "./config";
import { INewUser } from "@/types";

export const createUserAccount = async (user: INewUser) => {

    try {

        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name)

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username:user.username,
            imageUrl: avatarUrl
        })

    } catch (error) {
        console.log(error)
        return error;
    } finally {
        console.log("Want To Create User") // For Testing
    }

}

export async function saveUserToDB(user: {
    accountId: String;
    email: String;
    name: String;
    username?: String;
    imageUrl: URL | String;
}) {
    try {

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        )

        return newUser
    } catch (error) {
        console.log(error)
    }
}