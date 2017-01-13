import React from 'react';
import {
    storiesOf
} from '@kadira/storybook';
import YouTubePlayer from './../';

storiesOf('REACT.js', module)
    .add('LESSON 1', () => {
        return <YouTubePlayer
            height='360'
            playbackState='unstarted'
            videoId='-AbaV3nrw6E'
            width='640'
        />;
    })
    .add('LESSON 2', () => {
        return <YouTubePlayer
            height='360'
            playbackState='playing'
            videoId='2NLgQMs2hOw'
            width='640'
        />;
    })
    .add('LESSON 3', () => {
        return <YouTubePlayer
            height='360'
            playbackState='paused'
            videoId='OzqR10jG1pg'
            width='640'
        />;
    });
