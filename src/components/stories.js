import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import{Button, Progress, Message, Notification} from "bloomer";
import { Menu } from "bloomer/lib/components/Menu/Menu";
import { MenuList } from "bloomer/lib/components/Menu/MenuList";
const HtmlToReactParser = require('html-to-react').Parser;



class Stories extends Component {
    constructor(props){
        super(props);
        this.state = {
        stories: [],
        isLoaded: false,
    }
    }
    



    async componentDidMount() {
        this.renderStory();
    }

    renderStory = async () => {
        const response = await loadData(
            `https://cors-anywhere.herokuapp.com/https://www.justice.gov/api/v1/press_releases.json`
        );
        const stories = await response.results;
        
        // CONVERT INGREDIENTS TO ARRAY!
        
        this.setState({
            stories
        });
    };

    refreshStory = () => {
        this.renderStory();
        
    };

    render() {

        const { stories, isLoaded } = this.state;
        if(!isLoaded){
            return <div><Progress>loading...</Progress>
            <Button isColor="danger" onClick={() => this.refreshStory()}>Click for more stories</Button>
            {stories.map((story) =>{
                        console.log(story);
                        return (
                         <Notification isColor="warning">{story.title}</Notification>
                        
                        )

                        })}
            </div>

        }
        else{

            return (
                
                
                <>
                    <div>
                   
                    
                        <ul>
                            
                  
                  </ul>
                    </div>
                </>
            )};
        }
}
{/* <Button isColor="danger" onClick={() => this.refreshStory()}> */}

export default Stories;
