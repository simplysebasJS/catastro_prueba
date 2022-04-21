import { useMutation, useQuery } from '@apollo/client'
import { ALL_LANDS } from './queries';
import { CREATE_LAND, DELETE_LAND, EDIT_LAND } from './mutations';


export const useGetLands = () => {
  const results = useQuery(ALL_LANDS);
  return results;
}

export const useCreateLand = () => {
  const [addLand] = useMutation(CREATE_LAND, {
      refetchQueries: [ { query: ALL_LANDS } ]
  })
  return addLand;
}

export const useEditLand = () => {
  const [editLand] = useMutation(EDIT_LAND)
  return editLand;
}

export const useDeleteLand = () => {
  const [deleteLand] = useMutation(DELETE_LAND, {
      refetchQueries: [ { query: ALL_LANDS } ]
  });
  return deleteLand;
}