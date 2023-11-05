import { Create } from "@refinedev/shadcn";
import { PostForm } from "../../components/form";
export const PostCreate: React.FC = () => {
    return (
        <Create>
            <PostForm redirect="edit" />
        </Create>
    );
};
