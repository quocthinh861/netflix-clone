import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({user, children, ...resProps})
{
    return (
        <Route {...resProps} 
        render={
            () => {
                if(!user)
                {
                    return children;
                }
                else
                {
                    return <Redirect to='/browse'></Redirect>
                }
            }
        }
        />
    )
}

export function ProtectedRoute({user, children, ...resProps})
{
    return <Route {...resProps}
            render={() => {
                if(!user)
                {
                    return <Redirect to='/signin'></Redirect>
                }
                else 
                {
                    return children;
                }
            }
        }
        />
}