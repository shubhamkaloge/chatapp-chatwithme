import Conversation from "../model/Conversation.js"

export const newConversation = async (req, res) => {

    try {

        let senderId = req.body.senderId;
        let receiverId = req.body.receiverId;

        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })

        if (exist) {
            res.status(200).json('conversation already exists');
            return;
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        await newConversation.save();

        res.status(200).json("added success");

        // const savedConversation = await newConversation.save();
    } catch (error) {
        res.status(500).json(error);
    }

}

export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [ request.body.sender, request.body.receiver] }});
        response.status(200).json(conversation);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }

}