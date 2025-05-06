import { throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  handleError(error: HttpErrorResponse) {
    const errorMessage = error.status === 0 ? 'Backend nicht erreichbar' : error.error.backendErrorMessage

    return throwError(() => new Error(errorMessage))
  }
}
