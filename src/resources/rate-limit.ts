// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class RateLimit extends APIResource {
  /**
   * Limit the number of API requests within a specific timeframe.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/rate-limit', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
