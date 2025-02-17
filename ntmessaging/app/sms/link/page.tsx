"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  telephoneNumber: z
    .string()
    .min(10, {
      message: "หมายเลขโทรศัพท์ต้องมีอย่างน้อย 10 ตัวอักษร",
    })
    .max(10),
  sendMessages: z.string(),
});

function sendlink() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      telephoneNumber: "",
      sendMessages: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="w-auto h-screen flex flex-col p-7 gap-4">
      <div className="flex flex-row gap-4 p-2">
        <Send />
        <h1>ส่ง SMS แนบลิ้งค์</h1>
      </div>
      <Card className="flex flex-col p-4 gap-4 w-2/3">
        <h1>อัปโหลดเบอร์โทรศัพท์จากไฟล์ Excel</h1>
        <h1>ดาวน์โหลดตัวอย่าง Excel</h1>
        <div>
          <h1>Sender Name</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex justify-start items-start "
              >
                <div>
                  <h1>Choose Sender Name</h1>
                </div>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-2 w-[1000px]">
          <h1>หมายเลขโทรศัพท์</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="telephoneNumber"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>หมายเลขโทรศัพท์</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="โปรดใส่เบอร์โทรศัพท์ โดยมี , คั่นแต่ละเบอร์เเละไม่ต้องมี -"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type="submit">Submit</Button> */}
            </form>
          </Form>
        </div>
        <div className="flex flex-col gap-2">
          <h1>เลือกไฟล์ที่จะ upload</h1>
          <div className="grid w-[100%] max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </div>
        <Button className="w-2/3">Upload</Button>
      </Card>
    </div>
  );
}

export default sendlink;
