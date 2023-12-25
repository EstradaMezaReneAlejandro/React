import TextExpander from "./TextExpander.jsx";

export default function App()
{
    return (
        <div className="App">
            <TextExpander 
                expandButton="Show more"
                collapseButton="Show less"
                buttonColor="#f643ab"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, ex vel imperdiet tempus, leo odio pharetra est, ac ornare magna erat sed tellus. Curabitur eleifend fermentum vehicula. Vivamus enim enim, euismod ac porta ut, pellentesque nec sapien. Duis mauris.
            </TextExpander>
            <TextExpander 
                expandButton="Read more"
                collapseButton="Read less"
                buttonColor="#b3f"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, ex vel imperdiet tempus, leo odio pharetra est, ac ornare magna erat sed tellus. Curabitur eleifend fermentum vehicula. Vivamus enim enim, euismod ac porta ut, pellentesque nec sapien. Duis mauris.
            </TextExpander>
        </div>
    );
}