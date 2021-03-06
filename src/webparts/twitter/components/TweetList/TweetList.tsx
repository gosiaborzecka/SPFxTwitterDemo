import * as React from 'react';
import ITweetListProps from './ITweetListProps';
import styles from './TweetList.module.scss';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Image } from 'office-ui-fabric-react/lib/Image';

export default class TweeetList extends React.Component<ITweetListProps, {}>{

  private twiiterUrl: string = 'https://twitter.com/' + this.props.UserName;
  private mapUrl: string = 'https://www.bing.com/maps?where=' + this.props.Location;

  constructor(props: ITweetListProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <Fabric className={styles.twitterList}>
        <div className={styles.row}>
          <div className={styles.columns6}>
            <Label className={styles.title}>{this.props.Title}</Label>
            <Label className={styles.createdAt}>{this.props.CreatedAt}</Label>
            <Label className={styles.language}>Language: {this.props.Language}</Label>
          </div>
          <div className={styles.columns6}>
            <Image
              src={this.props.ProfileImage}
              alt={this.props.UserName}
            />
            <Label className={styles.userName}>{this.props.ScreenName} | <a href={this.twiiterUrl}>@{this.props.UserName}</a></Label>
            <Label className={styles.location}><a href={this.props.Location}>{this.props.Location}</a></Label>
          </div>
        </div>
      </Fabric>
    );
  }
}
