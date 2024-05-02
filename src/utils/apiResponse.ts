import { NextResponse } from "next/server";

export function success(data?: any, message: string = "Success") {
  return NextResponse.json(
    {
      status: 200,
      data,
      message,
    },
    { status: 200 }
  );
}

export function created(data?: any, message: string = "Success") {
  return NextResponse.json(
    {
      status: 201,
      data,
      message,
    },
    { status: 201 }
  );
}

export function badRequest(
  errors: Array<any>,
  message: string = "Bad Request"
) {
  return NextResponse.json(
    {
      status: 400,
      errors,
      message,
    },
    { status: 400 }
  );
}

export function unauthorized(message: string = "Unauthorized") {
  return NextResponse.json(
    {
      status: 401,
      message,
    },
    { status: 401 }
  );
}

export function forbidden(message: string = "Forbidden") {
  return NextResponse.json(
    {
      status: 403,
      message,
    },
    { status: 403 }
  );
}

export function notFound(message: string = "Not Found") {
  return NextResponse.json(
    {
      status: 404,
      message,
    },
    { status: 404 }
  );
}

export function internalServerError(
  errors: Array<any>,
  message: string = "Internal Server Error"
) {
  return NextResponse.json(
    {
      status: 500,
      message,
      errors,
    },
    { status: 500 }
  );
}
