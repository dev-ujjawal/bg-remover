import { Webhook } from 'svix'

//API controller function to manage clerk user with database
//api endpoint=> http://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
    
    try {

        //create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.)
        
    } catch (error) {
        
    }

}