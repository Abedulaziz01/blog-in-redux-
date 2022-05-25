import { useSelector } from "react-redux";
import { selectAllusers } from "./users/userSlice";

const PostAuthore = ({ userid }) => {
    const users = useSelector(selectAllusers)

    const author = users.find(user => user.id === userid);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthore