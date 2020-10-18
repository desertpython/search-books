import { triggerAsyncId } from "async_hooks";
import { cachedDataVersionTag } from "v8";
import gql from 'graphql-tag';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            image
            descritpion
            title
            link
        }
    }
}
`;