import { BackendErrorsInterface } from "./backendErrors.interface"
import { CurrentUserInterface } from "./currentUser.interface"

export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null
    isLoading: boolean
    isLoggedIn: boolean | null
    validationErrors: BackendErrorsInterface | null
}