import React, { useState } from 'react';
import styles from './Hook.module.scss';
import { IHookProps } from './IHookProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton } from "office-ui-fabric-react"

export const Hook = (props: IHookProps) => {
  const [hearts, setHearts] = useState<number>(1);
  const { description } = props
  const { hook, container, row, column, title, subTitle, description: descriptionStyle, button, label } = styles

  return (
    <div className={ hook }>
      <div className={ container }>
        <div className={ row }>
          <div className={ column }>
            <span className={ title }>Welcome to SharePoint!</span>
            <p className={ subTitle }>Customize SharePoint experiences using Web Parts.</p>
            <p className={ descriptionStyle }>{escape(description)}</p>
            <div>We {[...Array(hearts)].map(heart => "❤")} SPFx and Hooks!</div>
            <DefaultButton onClick={event => setHearts(hearts+1)} styles={{ root: { background: "#faa" } }}>Love me</DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
};
