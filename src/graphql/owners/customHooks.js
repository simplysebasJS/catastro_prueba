import { useMutation, useQuery } from '@apollo/client'
import { ALL_OWNERS } from '../../graphql/owners/queries';
import { CREATE_OWNER, DELETE_OWNER, EDIT_OWNER } from '../../graphql/owners/mutations';

export const useGetOwners = () => {
    const results = useQuery(ALL_OWNERS);
    return results;
}

export const useCreateOwner = () => {
    const [addOwner] = useMutation(CREATE_OWNER, {
        refetchQueries: [ { query: ALL_OWNERS } ]
    })
    return addOwner;
}

export const useEditOwner = () => {
    const [editOwner] = useMutation(EDIT_OWNER)
    return editOwner;
}

export const useDeleteOwner = () => {
    const [deleteOwner] = useMutation(DELETE_OWNER, {
        refetchQueries: [ { query: ALL_OWNERS } ]
    });
    return deleteOwner;
}