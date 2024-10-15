import { FC, ReactElement, useEffect } from "react";
import IndexComponentSection from "./sections/index/index.component";
import { HttpInterceptor } from "./interceptors/http.interceptor";
import RepositoryContext from "./context/repository.context";
import SnackbarContext from "./context/snackbar.context";

const App: FC = (): ReactElement => {
    useEffect((): void => {
        new HttpInterceptor();
    }, []);

    return (
        <RepositoryContext>
            <SnackbarContext>
                <IndexComponentSection/>
            </SnackbarContext>
        </RepositoryContext>
    );
};

export default App;