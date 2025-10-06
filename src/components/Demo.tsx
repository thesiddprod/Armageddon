import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { AlertCircle, Settings, MoreHorizontal } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';
import { Spinner } from './ui/spinner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator as CrumbSeparator } from './ui/breadcrumb';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent as ADContent, AlertDialogDescription as ADDescription, AlertDialogFooter as ADFooter, AlertDialogHeader as ADHeader, AlertDialogTitle as ADTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { AspectRatio } from './ui/aspect-ratio';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './ui/button-group';
import { Calendar } from './ui/calendar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from './ui/chart';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator as CmdSeparator, CommandShortcut } from './ui/command';
import { ContextMenu, ContextMenuCheckboxItem as CtxCheckboxItem, ContextMenuContent as CtxContent, ContextMenuItem as CtxItem, ContextMenuLabel as CtxLabel, ContextMenuSeparator as CtxSeparator, ContextMenuTrigger as CtxTrigger } from './ui/context-menu';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty';
import { Field, FieldContent, FieldGroup, FieldLabel as FLabel, FieldLegend, FieldSeparator as FSeparator, FieldSet } from './ui/field';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from './ui/input-group';
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './ui/input-otp';
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle } from './ui/item';
import { Kbd, KbdGroup } from './ui/kbd';
import { Menubar, MenubarCheckboxItem as MbCheckboxItem, MenubarContent as MbContent, MenubarItem as MbItem, MenubarMenu as MbMenu, MenubarSeparator as MbSeparator, MenubarTrigger as MbTrigger } from './ui/menubar';
import { NavigationMenu, NavigationMenuContent as NmContent, NavigationMenuIndicator as NmIndicator, NavigationMenuItem as NmItem, NavigationMenuLink as NmLink, NavigationMenuList as NmList, NavigationMenuTrigger as NmTrigger } from './ui/navigation-menu';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';
import { RadioGroup as RG, RadioGroupItem } from './ui/radio-group';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { ScrollArea } from './ui/scroll-area';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Sidebar, SidebarContent as SbContent, SidebarFooter as SbFooter, SidebarGroup as SbGroup, SidebarGroupLabel as SbGroupLabel, SidebarHeader as SbHeader, SidebarInset as SbInset, SidebarMenu as SbMenu, SidebarMenuButton as SbMenuButton, SidebarMenuItem as SbMenuItem, SidebarProvider, SidebarSeparator as SbSeparator, SidebarTrigger } from './ui/sidebar';
import { Toggle } from './ui/toggle';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { useForm } from 'react-hook-form';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function Demo() {
  const [progress, setProgress] = React.useState(33);
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [openCommand, setOpenCommand] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<{ email: string }>();
  const chartData = [
    { name: 'Jan', uv: 400 },
    { name: 'Feb', uv: 300 },
    { name: 'Mar', uv: 500 },
  ];

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Démo Shadcn UI</h1>
        <p className="text-muted-foreground">Showcase des composants React</p>
        <div className="flex justify-center gap-2">
          <Badge>React</Badge>
          <Badge variant="secondary">Shadcn</Badge>
          <Badge variant="outline">Astro</Badge>
        </div>
      </div>

      {/* Alert */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          Cette page démontre l'utilisation des composants Shadcn UI.
        </AlertDescription>
      </Alert>

      {/* Tabs */}
      <Tabs defaultValue="forms" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="forms">Formulaires</TabsTrigger>
          <TabsTrigger value="data">Données</TabsTrigger>
          <TabsTrigger value="ui">Interface</TabsTrigger>
        </TabsList>

        <TabsContent value="forms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Formulaire</CardTitle>
              <CardDescription>Exemple avec différents inputs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message..." />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Notifications</Label>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un pays" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="be">Belgique</SelectItem>
                  <SelectItem value="ch">Suisse</SelectItem>
                </SelectContent>
              </Select>
              <div className="space-y-2">
                <Label>Volume: {sliderValue[0]}</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
              </div>
              <Button className="w-full">Envoyer</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tableau</CardTitle>
              <CardDescription>Liste des utilisateurs</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Utilisateur</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        John Doe
                      </div>
                    </TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell><Badge>Actif</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        Jane Smith
                      </div>
                    </TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell><Badge variant="secondary">Inactif</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progression</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Progression: {progress}%</Label>
                <Progress value={progress} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ui" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Accordéon</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Qu'est-ce que Shadcn UI ?</AccordionTrigger>
                  <AccordionContent>
                    Collection de composants réutilisables avec Radix UI et Tailwind CSS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Comment l'installer ?</AccordionTrigger>
                  <AccordionContent>
                    Utilisez npx shadcn@latest init pour l'installer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Boutons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button>Défaut</Button>
                <Button variant="secondary">Secondaire</Button>
                <Button variant="destructive">Destructif</Button>
                <Button variant="outline">Contour</Button>
                <Button variant="ghost">Fantôme</Button>
                <Button size="sm">Petit</Button>
                <Button size="lg">Grand</Button>
                <Button size="icon"><Settings className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tooltip & Popover</CardTitle>
              <CardDescription>Infobulles et popovers</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Survolez-moi</Button>
                  </TooltipTrigger>
                  <TooltipContent>Voici un tooltip</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Popover>
                <PopoverTrigger asChild>
                  <Button>Ouvrir Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Titre Popover</h4>
                    <p className="text-sm text-muted-foreground">Contenu contextuel.</p>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline"><MoreHorizontal className="h-4 w-4" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => toast.success('Élément cliqué')}>Action 1</DropdownMenuItem>
                  <DropdownMenuItem>Action 2</DropdownMenuItem>
                  <DropdownMenuCheckboxItem checked>Option</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breadcrumb & Separator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
                  </BreadcrumbItem>
                  <CrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Produits</BreadcrumbLink>
                  </BreadcrumbItem>
                  <CrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Rasoirs</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Separator />
              <div className="text-sm text-muted-foreground">Contenu séparé par une ligne.</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skeleton & Spinner</CardTitle>
              <CardDescription>États de chargement</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-8 w-24" />
              </div>
              <Spinner />
            </CardContent>
          </Card>

          {/* Extra components showcase (ajoutés rapidement) */}
          <Card>
            <CardHeader>
              <CardTitle>Alert Dialog</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Ouvrir</Button>
                </AlertDialogTrigger>
                <ADContent>
                  <ADHeader>
                    <ADTitle>Êtes-vous sûr ?</ADTitle>
                    <ADDescription>Ceci est une action importante.</ADDescription>
                  </ADHeader>
                  <ADFooter className="flex justify-end gap-2">
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction>Confirmer</AlertDialogAction>
                  </ADFooter>
                </ADContent>
              </AlertDialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aspect Ratio</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16/9}>
                <div className="flex h-full w-full items-center justify-center rounded-md border">16:9</div>
              </AspectRatio>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Group</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <ButtonGroup>
                <Input placeholder="Rechercher…" className="w-48" />
                <ButtonGroupSeparator />
                <Button variant="secondary">Filtrer</Button>
                <Button>OK</Button>
              </ButtonGroup>
              <ButtonGroup>
                <ButtonGroupText>Actions</ButtonGroupText>
                <Button variant="outline">A</Button>
                <Button variant="outline">B</Button>
              </ButtonGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Carousel</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  {[1,2,3].map((i) => (
                    <CarouselItem key={i} className="p-4">
                      <div className="h-32 w-full rounded-md border flex items-center justify-center">Slide {i}</div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ uv: { label: 'Valeur', color: 'hsl(var(--primary))' } }}
                className="h-64 w-full"
              >
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Area type="monotone" dataKey="uv" stroke="var(--color-uv)" fill="var(--color-uv)" fillOpacity={0.2} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Collapsible</CardTitle>
            </CardHeader>
            <CardContent>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline">Basculer</Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 rounded-md border p-4">Contenu repliable</div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Command Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setOpenCommand(true)}>Ouvrir</Button>
              <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
                <CommandInput placeholder="Tapez une commande..." />
                <CommandList>
                  <CommandEmpty>Aucun résultat.</CommandEmpty>
                  <CommandGroup heading="Général">
                    <CommandItem>Action 1 <CommandShortcut>⌘A</CommandShortcut></CommandItem>
                    <CommandItem>Action 2</CommandItem>
                  </CommandGroup>
                  <CmdSeparator />
                  <CommandGroup heading="Autre">
                    <CommandItem>Item</CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Context Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <ContextMenu>
                <CtxTrigger asChild>
                  <div className="rounded-md border p-6">Clic droit ici</div>
                </CtxTrigger>
                <CtxContent>
                  <CtxLabel>Options</CtxLabel>
                  <CtxItem>Renommer</CtxItem>
                  <CtxItem>Dupliquer</CtxItem>
                  <CtxSeparator />
                  <CtxCheckboxItem checked>Activer</CtxCheckboxItem>
                </CtxContent>
              </ContextMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
            </CardHeader>
            <CardContent>
              <Drawer>
                <DrawerTrigger asChild><Button>Ouvrir</Button></DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Tiroir</DrawerTitle>
                    <DrawerDescription>Contenu du tiroir</DrawerDescription>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Empty</CardTitle>
            </CardHeader>
            <CardContent>
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">🙂</EmptyMedia>
                  <EmptyTitle>Aucun élément</EmptyTitle>
                  <EmptyDescription>Ajoutez-en pour commencer.</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button>Créer</Button>
                </EmptyContent>
              </Empty>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Field & Form</CardTitle>
              <CardDescription>Exemple simple</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(() => toast.success('Envoyé'))}>
                  <FieldSet>
                    <FieldLegend>Connexion</FieldLegend>
                    <FieldGroup>
                      <Field>
                        <FLabel>Email</FLabel>
                        <FieldContent>
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Votre email</FormLabel>
                              <FormControl>
                                <Input placeholder="email@example.com" {...field} />
                              </FormControl>
                              <FormDescription>Nous ne partagerons pas votre email.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                    <FSeparator>ou</FSeparator>
                    <Button type="submit">Envoyer</Button>
                  </FieldSet>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild><Button variant="outline">Survol</Button></HoverCardTrigger>
                <HoverCardContent>Infos supplémentaires</HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Group</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <InputGroup>
                <InputGroupAddon>
                  <KbdGroup><Kbd>Ctrl</Kbd>+<Kbd>K</Kbd></KbdGroup>
                </InputGroupAddon>
                <InputGroupInput placeholder="Chercher..." />
                <InputGroupAddon>
                  <InputGroupButton size="sm">Go</InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <InputGroup>
                <InputGroupText>Commentaire</InputGroupText>
                <InputGroupTextarea placeholder="Votre message" />
              </InputGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input OTP</CardTitle>
            </CardHeader>
            <CardContent>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Item</CardTitle>
            </CardHeader>
            <CardContent>
              <ItemGroup>
                <Item>
                  <ItemMedia variant="icon">📦</ItemMedia>
                  <ItemContent>
                    <ItemHeader>
                      <ItemTitle>Produit</ItemTitle>
                    </ItemHeader>
                    <ItemDescription>Un super produit</ItemDescription>
                    <ItemFooter>
                      <ItemActions><Button size="sm">Acheter</Button></ItemActions>
                    </ItemFooter>
                  </ItemContent>
                </Item>
                <ItemSeparator />
                <Item>
                  <ItemMedia variant="image"><img src="/favicon.svg" alt="" /></ItemMedia>
                  <ItemContent>
                    <ItemTitle>Autre</ItemTitle>
                  </ItemContent>
                </Item>
              </ItemGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kbd</CardTitle>
            </CardHeader>
            <CardContent>
              <KbdGroup><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>P</Kbd></KbdGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Menubar</CardTitle>
            </CardHeader>
            <CardContent>
              <Menubar>
                <MbMenu>
                  <MbTrigger>Fichier</MbTrigger>
                  <MbContent>
                    <MbItem>Nouveau</MbItem>
                    <MbItem>Ouvrir…</MbItem>
                    <MbSeparator />
                    <MbCheckboxItem checked>Auto-save</MbCheckboxItem>
                  </MbContent>
                </MbMenu>
                <MbMenu>
                  <MbTrigger>Édition</MbTrigger>
                  <MbContent>
                    <MbItem>Copier</MbItem>
                    <MbItem>Coller</MbItem>
                  </MbContent>
                </MbMenu>
              </Menubar>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Navigation Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NmList>
                  <NmItem>
                    <NmTrigger>Produits</NmTrigger>
                    <NmContent className="p-4">
                      <a className="block rounded-md border p-2" href="#">Lien A</a>
                    </NmContent>
                  </NmItem>
                  <NmItem>
                    <NmLink href="#" className="rounded-md border px-3 py-2">Lien simple</NmLink>
                  </NmItem>
                </NmList>
                <NmIndicator />
              </NavigationMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pagination</CardTitle>
            </CardHeader>
            <CardContent>
              <Pagination>
                <PaginationContent>
                  <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                  <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationEllipsis /></PaginationItem>
                  <PaginationItem><PaginationNext href="#" /></PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
            </CardHeader>
            <CardContent>
              <RG defaultValue="a" className="flex gap-4">
                <div className="flex items-center gap-2"><RadioGroupItem value="a" id="a" /><Label htmlFor="a">A</Label></div>
                <div className="flex items-center gap-2"><RadioGroupItem value="b" id="b" /><Label htmlFor="b">B</Label></div>
              </RG>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resizable</CardTitle>
            </CardHeader>
            <CardContent>
              <ResizablePanelGroup direction="horizontal" className="h-24 rounded-md border">
                <ResizablePanel defaultSize={50}>
                  <div className="h-full w-full p-2">Gauche</div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                  <div className="h-full w-full p-2">Droite</div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scroll Area</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-24 w-full rounded-md border p-2">
                <div className="space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (<div key={i}>Ligne {i+1}</div>))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sheet</CardTitle>
            </CardHeader>
            <CardContent>
              <Sheet>
                <SheetTrigger asChild><Button>Ouvrir</Button></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Feuille</SheetTitle>
                    <SheetDescription>Contenu latéral</SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toggle & Toggle Group</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Toggle>On/Off</Toggle>
              <ToggleGroup type="single">
                <ToggleGroupItem value="bold">Gras</ToggleGroupItem>
                <ToggleGroupItem value="italic">Italique</ToggleGroupItem>
                <ToggleGroupItem value="underline">Souligné</ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sidebar (désactivé temporairement)</CardTitle>
              <CardDescription>Peut causer des problèmes d'hydratation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4">
                <p className="text-sm text-muted-foreground">Sidebar temporairement désactivé pour debug</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialog */}
      <div className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Ouvrir Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Exemple de Dialog</DialogTitle>
              <DialogDescription>
                Ceci est un exemple de dialog modal avec Shadcn UI.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dialog-name" className="text-right">Nom</Label>
                <Input id="dialog-name" className="col-span-3" />
              </div>
            </div>
            <Button>Sauvegarder</Button>
          </DialogContent>
        </Dialog>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}
