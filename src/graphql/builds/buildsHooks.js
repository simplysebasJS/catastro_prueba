import { useMutation, useQuery } from '@apollo/client'
import { ALL_BUILDS } from './queries';
import { CREATE_BUILD, DELETE_BUILD, EDIT_BUILD } from './mutations';


export const useGetBuilds = () => {
  const results = useQuery(ALL_BUILDS);
  return results;
}

export const useCreateBuild = () => {
  const [addBuild] = useMutation(CREATE_BUILD, {
      refetchQueries: [ { query: ALL_BUILDS } ]
  })
  return addBuild;
}

export const useEditBuild = () => {
  const [editBuild] = useMutation(EDIT_BUILD)
  return editBuild;
}

export const useDeleteBuild = () => {
  const [deleteBuild] = useMutation(DELETE_BUILD, {
      refetchQueries: [ { query: ALL_BUILDS } ]
  });
  return deleteBuild;
}