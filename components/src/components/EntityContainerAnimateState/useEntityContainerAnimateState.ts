/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

/* These are the possible values for the current variant. Use this to change the currentVariant dynamically.
Please don't modify */
const variantOptions = { StateOpen: 'StateOpen', Stateclose: 'Stateclose' };

const useEntityContainerAnimateState = () => {
  const [currentVariant, setCurrentVariant] = React.useState<string>(
    variantOptions['StateOpen']
  );

  const data: any = { currentVariant };

  const fns: any = { setCurrentVariant };

  return { data, fns };
};

export default useEntityContainerAnimateState;
