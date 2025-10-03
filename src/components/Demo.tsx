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

export default function Demo() {
  const [progress, setProgress] = React.useState(33);
  const [sliderValue, setSliderValue] = React.useState([50]);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

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
