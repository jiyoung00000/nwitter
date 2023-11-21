import Nweet from "components/Nweet";
import { storageService } from "fbase";
import { addDoc, collection, getFirestore, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useEffect, useState } from "react";
import { HomeClearButton, HomeContainer, HomeForm, HomeImage, HomeInput, HomeNweetContainer } from "styles/HomeStyle";
import { v4 as uuidv4 } from "uuid";

const Home = ({userObj}) =>{
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState();

    useEffect(() => {
        const db = getFirestore();
        const q = collection(db, "nweets");
    
        // onSnapshot을 사용하여 실시간 업데이트를 수신
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const nweetArray = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setNweets(nweetArray);
        });
    
        // 컴포넌트 언마운트 시에 이벤트 리스너 제거
        return () => unsubscribe();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();

        let attachmentUrl = "";
    
        // 첨부파일이 있을 경우, Firebase Storage에 업로드
        if (attachment !== "") {
            const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
            const response = await uploadString(attachmentRef, attachment, "data_url");
            attachmentUrl = await getDownloadURL(response.ref);
        }
    
        const db = getFirestore();
        await addDoc(collection(db, "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        });
        setNweet("");
        setAttachment("");
      };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target:{value},
        } = event;
        setNweet(value);
    };

    const onFileChange = (event) => {
        const {
            target:{files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: {result},
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => setAttachment("");

    return (
        <HomeContainer>
            <HomeForm onSubmit={onSubmit}>
                <HomeInput value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <HomeInput type="file" accept="image/*" onChange={onFileChange} />
                <HomeInput type="submit" value="Nweet" />
                {attachment && (
                    <div>
                        <HomeImage src={attachment} width="50px" height="50px" />
                        <HomeClearButton onClick={onClearAttachment}>Clear</HomeClearButton>
                    </div>
                )}
            </HomeForm>
            <HomeNweetContainer>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
                ))}
            </HomeNweetContainer>
        </HomeContainer>
    );
}

export default Home;