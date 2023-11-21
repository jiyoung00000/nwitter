import { deleteDoc, doc } from "@firebase/firestore";
import { dbService } from "fbase";
import { updateDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { useState } from "react";
import { HomeClearButton, HomeForm, HomeImage, HomeInput, HomeNweetText } from "styles/HomeStyle";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        if (ok) {
            await deleteDoc(doc(dbService, "nweets", nweetObj.id));
            if (nweetObj.attachmentUrl !== "") {
                const storage = getStorage();
                const storageRef = ref(storage, nweetObj.attachmentUrl);
                await deleteObject(storageRef);
            }
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(doc(dbService, "nweets", nweetObj.id), {
            text: newNweet,
        });
        setEditing(false);
    }

    return (
        <div>
            {editing ? (
                <>
                    <HomeForm onSubmit={onSubmit}>
                        <HomeInput onChange={onChange} value={newNweet} required />
                        <HomeInput type="submit" value="Update Nweet" />
                    </HomeForm>
                    <HomeClearButton onClick={toggleEditing}>Cancel</HomeClearButton>
                </>
                ) : (
                    <>
                    <HomeNweetText>{nweetObj.text}</HomeNweetText>
                    {nweetObj.attachmentUrl && <HomeImage src={nweetObj.attachmentUrl} width="50px" height="50px" />}
                    {isOwner && (
                        <>
                            <HomeClearButton onClick={onDeleteClick}>Delete Nweet</HomeClearButton>
                            <HomeClearButton onClick={toggleEditing}>Edit Nweet</HomeClearButton>
                        </>
                    )}
                    </>
                )}
        </div>
    );
}

export default Nweet;