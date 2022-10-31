import {useState} from 'react';
import {setPeople} from '../../store/order/slice';
import {useAppDispatch, useAppSelector} from '../common/use-redux';

export const MIN_COURSE_PER_PERSON = 2;
type PeopleOperationHandler = (people: number) => void;

export function usePeople() {
  const dispatch = useAppDispatch();

  const {people} = useAppSelector(state => state.order);
  const peopleChangeHandler: PeopleOperationHandler = people =>
    dispatch(setPeople({people: people < 2 ? MIN_COURSE_PER_PERSON : people}));

  const onPeopleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const people = event.currentTarget.value;
    peopleChangeHandler(parseInt(people, 10));
  };

  return [people, onPeopleChange] as const;
}
