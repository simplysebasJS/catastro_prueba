import { useMutation, useQuery } from "@apollo/client";
import { ALL_PROPERTIES, ALL_SELECT_DATA } from "./queries";
import { CREATE_PROPERTY, DELETE_PROPERTY, EDIT_PROPERTY } from './mutations';

export const useGetProperties = () => {
  const results = useQuery(ALL_PROPERTIES);
  return results;
}

export const useGetSelectsData = () => {
  const results = useQuery(ALL_SELECT_DATA);
  return results
}

export const useCreateProperty = () => {
  const [addProperty] = useMutation(CREATE_PROPERTY, {
    refetchQueries: [{ query: ALL_PROPERTIES }]
  })
  return addProperty;
}

export const useEditProperty = () => {
  const [editProperty] = useMutation(EDIT_PROPERTY)
  return editProperty;
}

export const useDeleteProperty = () => {
  const [deleteProperty] = useMutation(DELETE_PROPERTY, {
    refetchQueries: [{query: ALL_PROPERTIES}]
  });
  return deleteProperty;
}