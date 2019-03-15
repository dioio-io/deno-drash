// namespace Drash.Http

import { ServerRequest } from "https://deno.land/x/http/server.ts";
import DrashHttpResponse from "./response.ts";
import DrashHttpServer from "./server.ts";

/**
 * @property string[] paths - The paths that clients can use to access this resource.
 * @property string   name  - The name of this resource.
 */
export default class Resource {

  public paths;
  public name;

  protected request;
  protected response;
  protected server;

  // FILE MARKER: CONSTRUCTOR //////////////////////////////////////////////////

  /**
   * Construct an object of this class.
   *
   * @param ServerRequest request
   */
  constructor(request: ServerRequest, response: DrashHttpResponse, server: DrashHttpServer) {
    this.request = request;
    this.response = response;
    this.server = server;
  }
}
