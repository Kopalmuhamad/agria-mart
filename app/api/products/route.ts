import {
  retrieveData,
  retrieveDataByCategory,
  retrieveDataByFeatured,
  retrieveDataById,
  retrieveDataByName,
} from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const featured = searchParams.get("featured");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  if (category) {
    const products = await retrieveDataByCategory("products", category);
    if (products.length > 0) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: products,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  if (search) {
    const products = await retrieveDataByName("products", search);
    if (products.length > 0) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: products,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  if (featured) {
    const featuredBoolean = featured === "true";
    const products = await retrieveDataByFeatured("products", featuredBoolean);
    if (products.length > 0) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: products,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "Success", data: products });
}
