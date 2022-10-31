import * as React from 'react';
import {usePeople} from '../../hooks/features/use-people';
import {PeopleSelectorWrapper} from './styled';

const PeopleSelector = (): JSX.Element => {
  const [people, onPeopleChange] = usePeople();
  return (
    <PeopleSelectorWrapper>
      <label htmlFor="people">How many people for dinning?</label>
      <input
        id="people"
        type="number"
        onChange={onPeopleChange}
        value={people}
        min={2}
      />
    </PeopleSelectorWrapper>
  );
};

export default PeopleSelector;
